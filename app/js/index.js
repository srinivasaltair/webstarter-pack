import '../css/main.scss'

import '../about.html'

import $ from 'jquery'
import t from './example'

$(document).ready(() => {
    console.log('Hot ready');
    t.getStyles();
})