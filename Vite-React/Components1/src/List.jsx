function List()
{


    let  ListArray =[
        "One ",
        "two",
        "Three",
        "Four",
    ];



    const FilterNames = ListArray.filter((ListArray) =>  {
        if(ListArray.startsWith("T")){
            return <li>{ListArray}</li>;

        }
        return false;
    });
    return (


        <div>
            <ul>
                {FilterNames}
            </ul>
        </div>
    );
}

export default List;
