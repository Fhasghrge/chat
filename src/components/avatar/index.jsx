import React from 'react';
import PropTypes from 'prop-types';
import face1 from '../../assets/images/face-male-1.jpg'
import StyledAvatar, { StatusIcon, AvatarClip, AvatarImage } from './style';
function Avatar(props) {
    return (
        <StyledAvatar>
            <StatusIcon></StatusIcon>
            <AvatarClip>
                <AvatarImage src={face1} alt="avatar" />
            </AvatarClip>
        </StyledAvatar>
    );
}

Avatar.propTypes = {};

export default Avatar;
