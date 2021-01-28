import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { debounce } from 'throttle-debounce'
import { useHistory, Link } from 'react-router-dom';

export const UserJoinPage = () => {
    return (<><h1>회원가입</h1></>)
}