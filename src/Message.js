import { Card, CardContent, Typography } from '@material-ui/core'
import React, { forwardRef } from 'react'
import "./Message.css"; 

const Message = forwardRef(({message,user},ref) => {
    //condition to check if the user currently in is typing the message
    const isTrue = user===message.username;
    return (
        // if the current user has typed the message, then use the specific class to align the message to right and give blue color,
        // else the message will be in left side
        <div ref={ref} className={`message ${isTrue && 'message__user'}`}>
            <Card className={isTrue ? "message__userCard" : "message__guestCard"}>
                <CardContent>
                    <Typography color="white" variant="h6" component="h5">
                        {/* //if the message is from the typed by the user using it, then don't print user name
                        // else print user name from db
                        // if user name is null, display as unknown user */}
                        {!isTrue && `${message.username || 'Unknown User'} : `}{message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
});

export default Message
