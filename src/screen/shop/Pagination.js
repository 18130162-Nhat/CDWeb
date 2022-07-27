


function Pagination({ pagination ,click}) {

    const array = () => {
        let a = []
        let str =''
        for (let i = pagination.offset; i <= pagination.offset+pagination.sizePage-1; i++) {
            a.push(i)
            str+=i
        }
        return a
    }
    const render = () =>{
        let array = []
        for(let i=1 ; i<=pagination.totalPage;i++){
            array.push(i)
        }
        return array 
    }
    const clickPage =(event,pageActive) =>{
            event.preventDefault()
            click(pageActive)
    }

    if(pagination.totalPage<=pagination.sizePage){
        return (
            <div style={{ width: '80%', margin: 'auto' }}>
            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-end">
                    <li class="page-item">
                        <a onClick={(event) =>{clickPage(event,render()[0])}} class="page-link" href="#" tabindex="-1" aria-disabled="true">Trang đầu</a>
                    </li>
                    {
                        render().map(item => (
                            <li key={item} onClick ={(event) => clickPage(event,item)} class="page-item">
                                <a class="page-link" href="#">{item}</a>
                            </li>
                        ))
                    }
                    <li class="page-item">
                        <a onClick={(event) =>{clickPage(event,render()[render().length-1])}} class="page-link" href="#">Trang cuối</a>
                    </li>
                </ul>
            </nav>
        </div>
        )
    }

    return (
        <div style={{ width: '80%', margin: 'auto' }}>
            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-end">
                    <li class="page-item ">
                        <a onClick={(event) =>clickPage(event,array()[0])} class="page-link" href="#" tabindex="-1" aria-disabled="true">Trang đầu</a>
                    </li>
                    {
                        array().map(item => (
                            <li  key={item} class="page-item">
                                <a onClick ={(event) => clickPage(event,item)} class="page-link" href="#">{item}</a>
                            </li>
                        ))
                    }
                    <li class="page-item">
                        <a onClick={(event) =>clickPage(event,array()[array().length-1])} class="page-link" href="#">Trang cuối</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Pagination