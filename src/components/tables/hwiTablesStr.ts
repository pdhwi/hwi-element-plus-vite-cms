declare namespace HwiTableStruct {
    interface Result {
        current_page: Number,
        data: Array<any>,
        last_page : Number,
        per_page: Number,
        total: Number,
    }

    interface AddButton{
        title: string,
        name: string,
        func: string
    }

    interface ButtonConfig {
        HiddenEditBtn: boolean,
        HiddenDelBtn: boolean,
        HiddenAction: boolean,
        NeedAddBtn: AddButton[],
        SetActionClass: string,
    }

}


