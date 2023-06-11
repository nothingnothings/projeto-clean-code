// accepts [text]@[text].[text], i.e. it simply requires an "@" and a dot - explanation about regular expression - good comment
const emailRegex = /\S+@\S+\.\S+/;

// Only works in browser environment
localStorage.setItem('user', 'test@test.com');