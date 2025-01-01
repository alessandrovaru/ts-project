(()=>{
    // let MyNUmber: number = undefined;
    // let MyString: string = null;
    let myNull: null = null;
    let myUndefined: undefined = undefined;

    let myNumber: number | null = null;
    myNumber = 12;

    let myString: string | undefined = undefined;
    myString = 'asas';

    function hi(name: string | null ) {
        let hello = 'Hello';
        if (name === null) {
            hello += 'Anon';
        } else {
            hello += name;
        }
        console.log(hello);
    }
    hi('Alessandro');
})();
