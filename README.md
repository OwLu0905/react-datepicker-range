# React Datepicker

### state 說明

1. start: 日曆選擇起始日
2. end: 日曆選擇結束日
3. changeStart: 上一時刻起始日(日曆選取還未完成時)
4. changeEnd: 上一時刻結束日(日曆選取還未完成時)

### 使用

- 紀錄選擇範圍內的日期
- 保存日曆選取未完成時的時刻狀態

### 為何使用?

- 只選擇起始日 start 時，結束日 end 的狀態會變 null
- changeStart、changeStart 保持前一時刻的起始與結束日期狀態，這樣才不會因為使用者未點選完日曆而得到錯誤得日期資訊。
