import userEvent from "@testing-library/user-event";
import { useState } from "react"
import { useEffect } from "react/cjs/react.development";
import { getGifs } from "../helpers/GetGifs";

export const useFetchGifs = ( category ) =>{ 

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () =>{ 

        getGifs( category )
            .then( imgs =>{ 

                setState({
                    data: imgs,
                    loading: false
                });
                
            });

    }, [ category ])

    return state;
}