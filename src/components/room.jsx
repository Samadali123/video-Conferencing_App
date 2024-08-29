
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import React, { useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Room = () => {
    const { roomId } = useParams();
    const navigate = useNavigate();

    function randomID(len) {
        let result = '';
        const chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP';
        const maxPos = chars.length;
        len = len || 5;
        for (let i = 0; i < len; i++) {
            result += chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return result;
    }

    let meeting = async (element) => {
        if (!roomId || roomId.trim() === '') {
            navigate('/');  // Redirect to home if roomId is invalid
            return;
        }

        const appID = 1706026508;
        const serverSecret = "27583ba43ab137d5336adb90873d5426";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, randomID(5), randomID(5));
        const zp = ZegoUIKitPrebuilt.create(kitToken);

        zp.joinRoom({
            container: element,
            maxUsers: 10,
            showUserName: true,
            showPreJoinView: true,
            videoResolutionDefault: 1280,
            showTextChat: true,
            showUserList: true,
            showRemoveUserButton: true,
            layout:  "Auto",
            showPinButton: true,
            enableUserSearch: true,
            scenario: {
                mode: ZegoUIKitPrebuilt.VideoConference,
            },
            onUserRemoved: () => {
                navigate('/');  
            }
        });
    }

    useEffect(() => {
        const element = document.querySelector('.meeting-container');
        if (element) {
            meeting(element);
        }
    }, [roomId]);

    return (
        <div className="meeting-container w-screen h-full">
        </div>
    );
};

export default Room;
