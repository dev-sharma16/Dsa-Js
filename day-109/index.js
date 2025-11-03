//* Queue and Stack

//? Gfg : Queue Reversal
//* using extra space
/**
 * @param {Queue} q
 * @returns {void}
 */
// class Solution {
    // reverseQueue(q) {
        // let st = [];
        // while(q.length>0){
            // st.push(q.shift());
        // }
        // 
        // while(st.length>0){
            // q.push(st.pop());
        // }
        // 
    // }
// }
//* without using extra space ( recursion )
class Solution {
    reverseQueue(q) {
        this.solve(q)
    }
    
    solve(q){
        if(q.length == 0) return;
        let temp = q.shift();
        
        this.solve(q);
        q.push(temp);
    }
}

//? Leetcode : 20. Valid Parentheses
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let st = [];
    let flag = true;
    for(let i=0; i<s.length; i++){
        let ch = s.charAt(i);
        if(ch == '(' || ch == '{' || ch == '['){
            st.push(ch);
            continue;
        } 
        if(st.length == 0) return false;
        if(ch === ')'){
            if(st[st.length - 1] == '(') st.pop();
            else {
                flag = false;
                break;
            }
        }
        if(ch === '}'){ 
            if(st[st.length - 1] == '{') st.pop();
            else {
                flag = false;
                break;
            }
        }
        if(ch === ']'){  
            if(st[st.length - 1] == '[') st.pop();
            else {
                flag = false;
                break;
            }
        }
    } 
    if(st.length != 0) return false; 
    return flag;
};