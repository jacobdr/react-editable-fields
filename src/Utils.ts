export const getProperty = function(path:string, obj:{[key:string]:any}, safe=true){
    return path.split('.').reduce(function(prev, curr) {
        return !safe ? prev[curr] : (prev ? prev[curr] : undefined);
    }, obj || self);
}
