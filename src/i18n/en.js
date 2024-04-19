export default {
  pages: {
    home: {
      title: "home",
      createRoom: "Create a room",
      joinRoom: "Join a room",
      yourRoom: "Your room",
      roomIdCopied: "Room id copied in the clipboard.",
    },
    createRoom: {
      title: "Create a room",
      labels: {
        nickname: "Your nickname",
      },
      placeholders: {
        nickname: "nickname",
      },
      errors: {
        emptyNickname: "Nickname must not be empty !",
        tooShortNickname: "Nickname must contains at least 4 characters !",
        failedCreatingRoom: "Failed to create room !",
      },
      submit: "Create",
      cancel: "Cancel",
    },
    joinRoom: {
      title: "Join a room",
      labels: {
        nickname: "Your nickname",
        roomId: "Room id",
      },
      placeholders: {
        nickname: "nickname",
        roomId: "id",
      },
      errors: {
        emptyNickname: "Nickname must not be empty !",
        tooShortNickname: "Nickname must contains at least 4 characters !",
        emptyRoomId: "Room id must not be empty !",
        noMatchingRoom: "There's no matching room !",
        alreadyFilledRoom: "This room is already busy !",
        failedJoiningRoom: "Failed to join room !",
      },
      submit: "Join",
      cancel: "Cancel",
    },
    newGame: {
      title: "New game",
      submit: "Confirm",
      cancel: "Cancel",
      hasWhite: "Do you have white ?",
      hasWhiteYes: "Yes",
      hasWhiteNo: "No",
      minutes: "minutes",
      seconds: "seconds",
      increment: "increment (s)",
      includeTime: "Play with clock ?",
      includeTimeYes: "Yes",
      includeTimeNo: "No",
      timeSetToZero: "You gave a time of zero (without the increment) !",
      editStartPosition: "Edit",
      copyFen: "Copy FEN",
      pasteFen: "Paste FEN",
      resetFen: "Reset",
      defaultFen: "Default",
      clearFen: "Clear",
    },
    giveUp: {
      title: "Give up ?",
      submit: "Confirm",
      cancel: "Cancel",
    },
    game: {
      outcomes: {
        gaveUp: "Game gave up by your opponent.",
        checkmate: "Checkmate !",
        stalemate: "Stalemate !",
        perpetualDraw: "Draw by three-fold repetition !",
        missingMaterial: "Draw by missing material !",
        fiftyMovesDraw: "Draw by the 50 moves rule !",
        userLostOnTime: "You lost on time out !",
        opponentLostOnTime: "Your opponent lost on time out !",
      },
    },
    pgn: {
      confirmationMessage: "Download the generated PGN file ?",
    },
    generic: {
      errors: {
        failedUpdatingRoom: "Failed to update room in database !",
        failedReadingRoom: "Failed to read room from database !",
        failedDeletingFieldsFromRoom: "Failed to delete fields in room in database !"
      },
    },
  },
};
