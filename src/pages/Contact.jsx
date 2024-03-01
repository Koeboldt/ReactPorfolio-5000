import React from 'react';

const Contact= () => {
    return (
        <form >
            <input type='text' id='email' name='email' placeholder='email goes here'/>
            <br></br>
            <input type='text' id='message' name='message' placeholder='your message to me goes here'/>
        </form>
    )
}

export default Contact;