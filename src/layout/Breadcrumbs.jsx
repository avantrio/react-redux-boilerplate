import React from 'react';

import history from '../routing/history';

const breadcrumbNameMap = {
    '/home': 'Home',
    
    '/inbox/important': 'Important',
    '/trash': 'Trash',
    '/spam': 'Spam',
    '/drafts': 'Drafts',
  };

export default function (props) {

    const currPath = history.location.pathname;
    
    const pathnames = currPath.split('/').filter(x => x).slice(1);

    return (
        <nav class="breadcrumb " aria-label="breadcrumbs">
            <ul>
                {pathnames.map((value, index)=>{
                    const last = index === pathnames.length - 1;
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                    return last ? (
                        <li class="is-active">
                            <a href="#" aria-current="page">{breadcrumbNameMap[to]}</a>
                        </li>
                      ) : (
                        <li><a href="#">{breadcrumbNameMap[to]}</a></li>
                      );
                })}
                
            </ul>
        </nav>
    )
}