const express = require('express');
const nunjucks = require('nunjucks');
const axios = require('axios');
const qs = require('qs');
const session = require('express-session');
const app = express();

app.use(session({
    secret : 'aaa',
    resave : false,
    secure : false,
    saveUninitialized: false,
}))

app.set('view engine','html');
nunjucks.configure('views',{
    express:app,
});

const kakao = {
    clientID : "50bbb5205dc8fcc9c2611542015a54d5",
    clientSecret : "S8oRhiZCvxEOQWCmq0AMBM71g5rxZsw8",
    redirectUri : "http://localhost:3000/auth/kakao/callback"
}

app.get('/',(req,res)=>{
    res.render('./index.html');
});

app.get('/auth/kakao',(req,res)=>{
    const kakaoAuthURL = `https://kauth.kakao.com/oauth/authorize?
    			client_id=${kakao.clientID}
                        &redirect_uri=${kakao.redirectUri}
                        &response_type=code
                        &scope=profile,account_email`;
                        
    res.redirect(kakaoAuthURL);
})

const kakao = {
    clientID : "50bbb5205dc8fcc9c2611542015a54d5",
    clientSecret : "S8oRhiZCvxEOQWCmq0AMBM71g5rxZsw8",
    redirectUri : "http://localhost:3000/auth/kakao/callback"
}

app.get('/',(req,res)=>{
    res.render('./index.html');
});

app.get('/auth/kakao',(req,res)=>{
    const kakaoAuthURL = `https://kauth.kakao.com/oauth/authorize?
    			client_id=${kakao.clientID}
                        &redirect_uri=${kakao.redirectUri}
                        &response_type=code
                        &scope=profile,account_email`;
                        
    res.redirect(kakaoAuthURL);
})

const kakao = {
    clientID : "50bbb5205dc8fcc9c2611542015a54d5",
    clientSecret : "S8oRhiZCvxEOQWCmq0AMBM71g5rxZsw8",
    redirectUri : "http://localhost:3000/auth/kakao/callback"
}

app.get('/',(req,res)=>{
    res.render('./index.html');
});

app.get('/auth/kakao',(req,res)=>{
    const kakaoAuthURL = `https://kauth.kakao.com/oauth/authorize?
    			client_id=${kakao.clientID}
                        &redirect_uri=${kakao.redirectUri}
                        &response_type=code
                        &scope=profile,account_email`;
                        
    res.redirect(kakaoAuthURL);
})

app.get('/auth/info',(req,res)=>{
    let {nickname,profile_image} = req.session.kakao.properties
    res.render('./info.html',{
        nickname,
        profile_image
    })
})
  


/////////////////////////////////////////////////////
const authData = {
    ...token.data, //깊은복사
    ...user.data,  //깊은복사
}

req.session.authData = {
    ["kakao"]:authData,
}

console.log(req.session);

req.session.authData



////////////////////////////////////////////////////




app.listen(3000,()=>{
    console.log('server 3000');
});



