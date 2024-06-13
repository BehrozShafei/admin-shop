'use client'
import React from "react";
import "./style.css";
import Mapir from "mapir-react-component";

const Map = Mapir.setToken({
    transformRequest: url => {
        return {
            url: url,
            headers: {
                "x-api-key": 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImNiYTk4YjY3ZDEzZDk3ZmFkYjFlYTZmMGNmYTczYzQxZTdjN2Q3NmZhNzYyMzlkYzZhYmU1OWVlYTRhOTk0MDRmOTk3NGYzMWRhYmVhNzhkIn0.eyJhdWQiOiIxNjk2OCIsImp0aSI6ImNiYTk4YjY3ZDEzZDk3ZmFkYjFlYTZmMGNmYTczYzQxZTdjN2Q3NmZhNzYyMzlkYzZhYmU1OWVlYTRhOTk0MDRmOTk3NGYzMWRhYmVhNzhkIiwiaWF0IjoxNjQ0MzI4MDUyLCJuYmYiOjE2NDQzMjgwNTIsImV4cCI6MTY0NjgzMzY1Miwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.ZAAHh_V_AVLZDMTekT7vCktSJ69zCjgutBq4z7khOB5MXPVwCGqMeHBxAj2NPENGhp6lXzKe8phuJzd_AwM0kwW3oV9SaNiXI0MicUr65QyQb_403i_tVb3hTCZS37pvfqWqPS4GHkSM07Kawp4vdlgFbojIda7astGPLvc5dwEO2rwVsXSX__H1gLtZU3VPO6mx-1pJvnf0ZOlDTyD8pj7DqG1fPVBrHU4xT0xkTXIHgBDT40I9nfpwA5hP8ZZOiUnJTvrh97oY8KfKCJVaf359O1Mkz3BV38AfoB6HTpHFfUfSSBNBSShKDSXbQ3A-KzMBOj1mu3mX9xtQeAk7Ug', //Mapir api key
                "Mapir-SDK": "reactjs"
            }
        };
    }
});
export default function page() {
    return (
        <div className="App">
            <Mapir center={[51.42047, 35.729054]} Map={Map}>
                <Mapir.Marker coordinates={[51.41, 35.72]} anchor="bottom" />
            </Mapir>
            asd
        </div>
    );
}
