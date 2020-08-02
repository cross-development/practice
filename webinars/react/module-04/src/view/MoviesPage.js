//Core
import React, { Component } from 'react';
//Components
import Notification from '../components/Notification/Notification';
import SearchForm from '../components/SearchForm/SearchForm';
import Loader from '../components/Loader/Loader';
import MoviesList from '../components/MoviesList/MoviesList';
//Services
import movieApi from '../services/tv-api';
//Utils
import getQueryString from '../utils/getQueryString';
