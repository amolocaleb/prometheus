<?php 

function p_asset($path) {
    $protocol =  (stripos($_SERVER['SERVER_PROTOCOL'],'https') === 0) ? 'https' : 'http';
    $base = $_SERVER['SERVER_NAME'];
    $format ="%s://%s/%s";
    return sprintf($format,$protocol,$base,ltrim($path,'/'));

}