import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "fontFamily": "Helvetica !important",
        "background": "#ebebeb",
        "fontSize": 14,
        "lineHeight": 1.42857143,
        "color": "#333"
    },
    "app": {
        "float": "left",
        "width": "100%",
        "height": "auto",
        "background": "#ebebeb"
    },
    "container": {
        "paddingRight": 15,
        "paddingLeft": 15,
        "marginRight": "auto",
        "marginLeft": "auto",
        "width": 960,
        "display": "block"
    },
    "background": {
        "backgroundColor": "#fff",
        "float": "left",
        "width": "100%",
        "height": "auto"
    },
    "topheader": {
        "float": "left",
        "width": "100%",
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "topheader img": {
        "float": "left",
        "width": "100%",
        "height": "auto"
    },
    "content": {
        "float": "left",
        "width": "100%",
        "height": "auto"
    },
    "landinginfo": {
        "float": "left",
        "width": "100%",
        "paddingTop": 0,
        "paddingRight": "19%",
        "paddingBottom": 0,
        "paddingLeft": "19%",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "height": "auto",
        "textAlign": "center",
        "boxSizing": "border-box"
    },
    "landinginfo h1": {
        "fontFamily": "'Helvetica'",
        "color": "#203979",
        "float": "left",
        "width": "100%",
        "height": "auto",
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0,
        "fontSize": 36
    },
    "centerText": {
        "textAlign": "center !important"
    },
    "landinginfo p": {
        "color": "#5b5b5b",
        "float": "left",
        "width": "100%",
        "height": "auto",
        "marginBottom": 40,
        "textAlign": "left",
        "fontSize": 14,
        "lineHeight": 18
    },
    "landinginfo h5": {
        "color": "#686c99",
        "float": "left",
        "width": "100%",
        "height": "auto",
        "fontSize": 20,
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0
    },
    "landinginfo videoimg": {
        "float": "left",
        "width": "100%",
        "height": "auto"
    },
    "landinginfo button": {
        "marginTop": 50,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "border": "2px solid #dfc686",
        "background": "transparent",
        "textTransform": "capitalize",
        "paddingTop": 7,
        "paddingRight": 45,
        "paddingBottom": 7,
        "paddingLeft": 45,
        "fontSize": 12,
        "color": "#203979"
    },
    "landinginfo button:focus": {
        "outline": "none"
    },
    "landinginfo soicalicons": {
        "float": "left",
        "width": "100%",
        "height": "auto",
        "marginTop": 40,
        "marginRight": 0,
        "marginBottom": 40,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "share": {
        "paddingRight": 14,
        "position": "relative",
        "bottom": 5,
        "zIndex": 0
    },
    "imgicons": {
        "width": 28,
        "height": 28,
        "paddingRight": 5
    }
});