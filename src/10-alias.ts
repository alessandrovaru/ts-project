(()=>{
  type UserID = string | boolean | number;
  let userId: string | number;


  //Literal Types
  type WindowStates = 'open' | 'closed' | 'minimized';
  type LockStates = 'locked' | 'unlocked';
  type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

  function greeting(userId: UserID, windowState: WindowStates) {
    if (typeof userId === 'string') {
      console.log(`string ${userId.toLowerCase()}`);
    }
    const random = Math.random();
    if (random > 0.5) {
      windowState = 'open';
    } else {
      windowState = 'closed';
    }

    console.log('windowState', windowState);

  }

  greeting('Nicolas', 'open');

 })();

