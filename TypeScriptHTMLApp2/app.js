var Employee = (function () {
    function Employee() {
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "fullNameA", {
        set: function (newName) {
            this._fullName = newName;
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}());
window.onload = function () {
    var employee = new Employee();
 
    AddChild(employee, "childer", "a001", { "name": "zhangsan", age: 20 });
    AddChild(employee, "childer", "a002", { "name": "lisi", age: 22 });
    AddChild(employee, "childer", "a003", { "name": "wangwu", age: 23 });
    AddChild(employee, "childer", "a004", { "name": "zhaoliu", age: 24 });

    AddChild(employee, "childer2", "a001", { "name": "zhangsan", age: 20 });
    AddChild(employee, "childer3", "a002", { "name": "lisi", age: 22 });

    //�Ƴ��ڶ���
    DeleteChild(employee, "childer", "a002");

    //���ս������ undefined
    alert(employee.childer["a002"]);  
};

/** 
 * �������
 * employee Ŀ�����
 * 
*/
function AddChild(employee, field, key, value) {
    if (!employee.hasOwnProperty(field)) {
        employee[field] = {};
    }
    employee[field][key] = value;
}

/** 
 * ɾ������
 * employee Ŀ�����
 * 
*/
function DeleteChild(employee, field, key) {
    if (employee.hasOwnProperty(field)) {
        if (employee[field].hasOwnProperty(key)) {
            delete employee[field][key];
        }
    }
}





