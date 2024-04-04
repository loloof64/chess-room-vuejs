import { ID, Query } from "appwrite";
import { databases, databaseId, collectionId } from '@/lib/appwrite.js';

async function tryCreatingRoom({ nickname }) {
    const isEmptyNickname = nickname.length === 0;
    const isTooShortNickname = nickname.length < 4;
    if (isEmptyNickname) {
        return { error: 'pages.createRoom.errors.emptyNickname' };
    }
    if (isTooShortNickname) {
        return { error: 'pages.createRoom.errors.tooShortNickname' };
    }

    try {
        const result = await databases.createDocument(
            databaseId,
            collectionId,
            ID.unique(),
            {
                hostUser: nickname,
            }
        );
        return { result };
    }
    catch (error) {
        console.error(error);
        return { error: 'pages.createRoom.errors.failedCreatingRoom', isFatalError: true };
    }
}

async function tryJoiningRoom({ nickname, roomId }) {
    const isEmptyNickname = nickname.length === 0;
    const isTooShortNickname = nickname.length < 4;
    const isEmptyId = roomId.length === 0;

    if (isEmptyNickname) {
        return { error: 'pages.joinRoom.errors.emptyNickname' };
    }
    if (isTooShortNickname) {
        return { error: 'pages.joinRoom.errors.tooShortNickname' };
    }
    if (isEmptyId) {
        return { error: 'pages.joinRoom.errors.emptyRoomId' }
    }

    try {
        const matchingDocuments = await databases.listDocuments(
            databaseId,
            collectionId,
            [
                Query.equal('$id', roomId)
            ]
        );
        const noMatchingRoom = matchingDocuments.total === 0;
        if (noMatchingRoom) {
            return { error: 'pages.joinRoom.errors.noMatchingRoom' }
        }

        await databases.updateDocument(databaseId, collectionId, roomId, {
            guestUser: nickname,
        });

        return { isOk: true };
    }
    catch (error) {
        console.error(error);
        return { error: 'pages.joinRoom.errors.failedJoiningRoom', isFatalError: true };
    }
}

export { tryCreatingRoom, tryJoiningRoom };