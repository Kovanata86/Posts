
import React from "react";
import { MyInputComponents } from "../myinput-component";
import { MySelect } from "../select";

export const PostFilterComponents = ({filter, setFilter }) => {

    return (
        <div>
               <MyInputComponents 
                  value={filter.query}
                  placeholder="Поиск..."
                  onChange={e => setFilter({...filter, query: e.target.value})}
               />
                  <MySelect
                     value={filter.sort}
                     onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                     defaultValue="Сортировка по"
                     options={[
                                 {value: 'title', name: 'По названию'},
                                 {value: 'body', name: 'По содержанию'},
                              ]}
                  />
             </div>
    )
}