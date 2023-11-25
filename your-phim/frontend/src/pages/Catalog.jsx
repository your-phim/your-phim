import React from 'react';

// Import hook useParams từ 'react-router' để lấy thông tin từ URL
import { useParams } from 'react-router';

// Import component PageHeader để hiển thị tiêu đề trang
import PageHeader from '../components/page-header/PageHeader';

// Import hằng số category từ API TMDB
import { category as cate } from '../api/tmdbApi';

// Import component MovieGrid để hiển thị lưới các phim hoặc series
import MovieGrid from '../components/movie-grid/MovieGrid';

// Component Catalog là trang danh mục phim hoặc series
const Catalog = () => {
    // Lấy giá trị của tham số 'category' từ URL
    const { category } = useParams();

    return (
        <>
            {/* Hiển thị tiêu đề trang dựa vào giá trị của 'category' */}
            <PageHeader>
                {category === cate.movie ? 'Movies' : 'TV Series'}
            </PageHeader>
            {/* Phần nội dung chính của trang, sử dụng container để căn giữa */}
            <div className="container">
                <div className="section mb-3">
                    {/* Sử dụng MovieGrid để hiển thị lưới phim hoặc series */}
                    <MovieGrid category={category}/>
                </div>
            </div>
        </>
    );
}

// Xuất (export) component Catalog để có thể sử dụng ở nơi khác trong ứng dụng
export default Catalog;
