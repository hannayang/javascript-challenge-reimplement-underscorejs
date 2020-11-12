test:
	node test.js

debug:
	node --inspect-brk test.js

underscore:
	USE_UNDERSCORE_JS=true node test.js
  