    //--------------------------------------------------    
    // 數字排序並回傳最大值
    // XX 20160413
    // 參數：x=[[12,13,16,0,61,31]
    // 結果：自動排序陣列x 回傳陣列最後同時也是最大的數字
    //-------------------------------------------------- 
    
    var x = [12,13,16,0,61,31];
    function f1(a){
        var bigone;
        bigone = a.sort();
                
        document.getElementById("demo").innerHTML = bigone[5];
    }
        
    function displaybyE(msg){
        document.getElementById("bb").innerHTML ="max value is: " + msg;
    }

    function displaybyC(msg){
        document.getElementById("bb").innerHTML ="最大值為 : " + msg;
    }

    function aaa(callback){
        var msg = document.getElementById("demo").innerHTML;
        if (isNaN(msg) == false){
                callback(msg);
            }
    }
