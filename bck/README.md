WS
TYPE: Enum
DATA: Object

ROW: 10 (start: 0, end: 9)
COL: 20 (start: 0, end: 19)

C->S
LEFT
RIGHT
UP {CLOCKWISE} 
DOWN {COUNTERCLOCKWISE}
SPACE
HOLD
-
START
PAUSE
END

S->C
TICK {brics}
BREAK {breakCnt}
SCORE
HOLD
NEXT
-
START
PAUSE
END

QWERT
T: RESERVED INDEX
R: COLOR INDEX
E: POSITION INDEX
W: BRICK STTUS INDEX
Q: BRICK TYPE INDEX

POSITION INDEX
0: U (Up)
1: D (Down)
2: L (Left)
3: R (Right)

BRICK STTUS INDEX
0: SETTED
1: DROPPING
2: CREATING


[
  [[0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0],]
]


UICommand
START
END
PAUSE

UP
  시계방향 회전
  [U -> R -> D -> L -> U]
DOWN
  반시계방향 회전
  [U -> L -> D -> R -> U]
LEFT
  왼쪽 이동
    왼쪽 끝에 있을때는 움직이지 않는다.
RIGHT
  오른쪽 이동
    오른쪽 끝에 있을때는 움직이지 않는다.
HOLD
  현재브릭 holding

TICK은 점점 빨라진다.


TICK LIFE CYCLE
1. Dropping Creating None CHECK
2. 만약 Creating이면 Dropping으로 바꿔주기
3. 만약 None이면 NextSelect해서 Creating 해주기
4. 만약 Dropping이면 주변 Setted체크하기
    (Setted란 Dropping인 Brick주변에 Setted된 Brick잇는지 체크)
5. 만약 주변 Setted이면 Dropping 을 Setted로 바꿔주기
6. Line Break 체크 있으면 Remove 한뒤 scoreup, 없으면 무시
7. emit