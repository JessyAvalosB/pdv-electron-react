import React from 'react';
import classnames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import './index.css';

import { setPage } from '../../redux/actions/pagination';
import { usePagination, DOTS } from '../../hooks/usePagination';
import { getPaginationConfig } from '../../redux/selectors/pagination';

const Pagination = () => {
    const { page, limit, totalItems, siblingCount } = useSelector(getPaginationConfig);
    const dispatch = useDispatch();

    const paginationRange = usePagination({
        page,
        totalItems,
        siblingCount,
        limit
    });

    // If there are less than 2 times in pagination range we shall not render the component
    if (page === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        dispatch(setPage(page + 1));
    };

    const onPrevious = () => {
        dispatch(setPage(page - 1));
    };

    let lastPage = paginationRange[paginationRange.length - 1];
    return (
        <ul
            className={classnames('pagination-container')}
        >
            {/* Left navigation arrow */}
            <li
                className={classnames('pagination-item', {
                    disabled: page === 1
                })}
                onClick={onPrevious}
            >
                <div className="arrow left" />
            </li>
            {paginationRange.map(pageNumber => {

                // If the pageItem is a DOT, render the DOTS unicode character
                if (pageNumber === DOTS) {
                    return <li className="pagination-item dots">&#8230;</li>;
                }

                // Render our Page Pills
                return (
                    <li
                        className={classnames('pagination-item', {
                            selected: pageNumber === page
                        })}
                        onClick={() => dispatch(setPage(pageNumber))}
                    >
                        {pageNumber}
                    </li>
                );
            })}
            {/*  Right Navigation arrow */}
            <li
                className={classnames('pagination-item', {
                    disabled: page === lastPage
                })}
                onClick={onNext}
            >
                <div className="arrow right" />
            </li>
        </ul>
    );
};

export default Pagination;