(function() {
    function PageList(options) {
        for (var i in options) {
            this[i] = options[i];
        }
        var obj = this;
        this.first.onclick = function () {
            obj.page = 1;
            obj.onChange();
        };
        this.prev.onclick = function () {
            obj.page = (obj.page > 1) ? (pbj.page - 1) : 1;
            obj.onChange();
        };
        this.next.onclick = function () {
            obj.page = (obj.page >= obj.maxPage) ? obj.maxPage : (obj.page +1);
            obj.onChange();
        };
        this.last.onclick = function () {
            obj.page = obj.maxPage;
            obj.onChange();
        };
    }
    PageList.prototype.updateStatus = function (){
        this.first.disabled = (this.page <= 1);
        this.prev.disabled = (this.page <= 1);
        this.next.disabled = (this.page >= this.maxPage);
        this.last.disabled = (this.page >= this.maxPage);
        this.pageNum.innerHTML = this.page;
    };
    function Comment(obj) {
        this.obj = obj;
    }
    Comment.prototype.ajax = function (url,start,complte){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status < 200 || xhr.status >= 300 && xhr.status !== 304){
                    alert('服务器异常');
                    return;
                }
                try {
                    var obj = JSON.parse(xhr.responseText);
                } catch (e) {
                    alert('解析服务器返回信息失败');
                    return;
                }
                complete(obj);
            }
        };
        xhr.open('GET',url);
        xhr.send();
        start();
    };
    Comment.prototype.create = function (data) {
        var html = '';
        for (var i in data){
            html += '<ul><li>id:'+data[i].id+'  用户名: '+ data[i].user + ' 发表时间： '
html += data[i].time + '</li>';
html += '<li>' + data[i].content + '</li><ul>';
        }
        this.obj.innerHTML = html;
    };

    function ProgressBar(container) {
        this.container = container;
        this.div = document.createElement('div');
        this.container.appendChild(this.div);
    }
    ProgressBar.prototype.show = function(){
        this.div.style.width = '70%';
    };
    ProgressBar.prototype.complete = function (){
        var div = this.div;
        var container = this.container;
div.style.width = '100%';
setTimeout(function (){
    div.style.opacity = 0;
    setTimeout(function (){
        container.removeChild(div);
    },300);
},500);
};
var QueryString = {
    get function () {
        return location.search.substr[1];
    },
    set: function (str) {
        history.pushState(null,null,'?' + str);
    },
    find: function (name){
        var reg = new REgExp('(^|&)' + name + '=([^&]*)(&|$)','i');
        var r = this.get().match(reg);
        return r ? unescape(r[2]) : null;
    },
    getPage: function (){
        var page = parseInt(this.find('page'));
        return (isNaN(page) || (page < 1)) ? 1 : page;
    }
};
var comment = new Comment(document.getElementById('comment'));
var progressBar;
var progressContainer = document.getElementById('progress');
var pageList = new PageList({
    page
}) 
}