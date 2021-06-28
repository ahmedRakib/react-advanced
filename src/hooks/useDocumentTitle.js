import { useEffect } from "react";

function useDocumentTitle (title){
    //in useEffect the first param is a function where we perform certain actions
    //the second param (dependency array) is optional which is used to declare on which values this effect is dependent. If that values are changed then this effect is executed.
    // we can also return a function from this effect where we will write the "clean up" code like we used to write in "componentWillUnmount" function.
    useEffect (() => {
        document.title = title;

        return () => {
            //cleanup code
        }
    },);
}

export default useDocumentTitle;