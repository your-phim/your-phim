import React from 'react';
import { Link } from 'react-router-dom';

// Import component Button và OutlineButton từ đường dẫn tương ứng
import { OutlineButton } from '../components/button/Button';
import HeroSlide from '../components/hero-slide/HeroSlide';
import MovieList from '../components/movie-list/MovieList';

// Import các hằng số và kiểu dữ liệu từ API TMDB
import { category, movieType, tvType } from '../api/tmdbApi';

// Component Home là trang chính của ứng dụng
const Home = () => {
    return (
        <>
            {/* Hiển thị component HeroSlide để hiển thị các bức ảnh quảng cáo */}
            <HeroSlide/>
            {/* Phần nội dung chính của trang chủ, sử dụng container để căn giữa và thêm các section */}
            <div className="container">
                {/* Section hiển thị các phim đang hot trên mạng */}
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Trending Movies</h2>
                        {/* Nút View more để chuyển đến trang phim */}
                        <Link to="/movie">
                            <OutlineButton className="small">View more</OutlineButton>
                        </Link>
                    </div>
                    {/* Sử dụng MovieList để hiển thị danh sách các phim */}
                    <MovieList category={category.movie} type={movieType.popular}/>
                </div>

                {/* Các section khác tương tự, hiển thị các danh sách phim và TV khác nhau */}
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Top Rated Movies</h2>
                        <Link to="/movie">
                            <OutlineButton className="small">View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.top_rated}/>
                </div>

                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Trending TV</h2>
                        <Link to="/tv">
                            <OutlineButton className="small">View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={tvType.popular}/>
                </div>

                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Top Rated TV</h2>
                        <Link to="/tv">
                            <OutlineButton className="small">View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={tvType.top_rated}/>
                </div>
            </div>
        </>
    );
}

// Xuất (export) component Home để có thể sử dụng ở nơi khác trong ứng dụng
export default Home;
