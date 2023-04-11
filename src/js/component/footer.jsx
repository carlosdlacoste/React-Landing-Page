import React from "react";


const data = {
    text: "Copyright © Your Website 2023"
};

export const Footer = () =>{

    return(

            <>
            
                <footer className="bg-dark text-center mt-3">
                    <div className="text-center p-3">
                        <p className="text-light">{data.text}</p>
                    </div>
                </footer>
            </>
    );
}