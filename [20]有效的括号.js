/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 *
 * https://leetcode-cn.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (37.32%)
 * Total Accepted:    64K
 * Total Submissions: 171.5K
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 
 * 有效字符串需满足：
 * 
 * 
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 
 * 
 * 注意空字符串可被认为是有效字符串。
 * 
 * 示例 1:
 * 
 * 输入: "()"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: "()[]{}"
 * 输出: true
 * 
 * 
 * 示例 3:
 * 
 * 输入: "(]"
 * 输出: false
 * 
 * 
 * 示例 4:
 * 
 * 输入: "([)]"
 * 输出: false
 * 
 * 
 * 示例 5:
 * 
 * 输入: "{[]}"
 * 输出: true
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let parentheses = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
	let lefts = []
	let chars = s.split("")
	for (let index = 0; index < chars.length; index ++) {
		const c = chars[index]
        if (parentheses[c]) {
			lefts.push(c)
		} else {
			if (lefts.length == 0) {
				return false
			} else {
				if (parentheses[lefts[lefts.length - 1]] !== c) {
					return false
				} else {
					lefts.pop()
				}
			}
		}
    }
	return lefts.length === 0
};
