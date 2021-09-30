import React, { useEffect, useState } from "react";

const Getperro = (props) => {
    const [image, setImage] = useState(null);

    const getImagenes = raza => {
        fetch(`https://dog.ceo/api/breed/${raza}/images/random`)
        .then(r => r.json())
        .then(result => {
            setImage(result.message);
        });
    };
    useEffect(() => {
        getImagenes(props.raza)
    }, []);

    return (
        <div>
            <img src={image} alt={props.raza} />
            <div>
                {props.raza}
            </div>
        </div>
    )
}

export default Getperro
