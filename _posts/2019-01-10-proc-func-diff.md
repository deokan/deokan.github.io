procedure vs function in ORACLE
-------------------------------

1. prodedure
 - Stored procs do not have to have a parameter, can change database objects, and do not have to return a value.
 
2. function
 - 계산된 값이며, SQL Server상의 영구적인 환경 변화를 수행할 수 없다. 예를 들어 INSERT 문이나 UPDATE 문은 허용되지 않는다.
 - 상수값을 리턴하는 function의 경우, SQL 문에서 inline으로 사용될 수 있으며, result set을 리턴할 경우엔 JOIN도 가능하다.
 - Functions follow the computer-sciency definition in that they MUST return a value and cannot alter the data they receive as parameters (the arguments). 
 - Functions are not allowed to change anything, must have at least one parameter, and they must return a value.
