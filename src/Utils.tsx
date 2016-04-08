import * as React from 'react'

export const getProperty = function(path:string, obj:{[key:string]:any}, safe=true){
    return path.split('.').reduce(function(prev, curr) {
        return !safe ? prev[curr] : (prev ? prev[curr] : undefined);
    }, obj || self);
};

export const Centered = ({ children }) => (
    <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {children}
    </div>
);
