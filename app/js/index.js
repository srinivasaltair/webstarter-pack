import '../css/main.scss'

import '../world.html'

import $ from 'jquery'
import t from './example'

$(document).ready(() => {
    console.log('Ready');
    t.getStyles();
})