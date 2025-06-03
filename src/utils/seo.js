/**NOTE
 * file dùng để lấy dữ liệu SEO từ Rank Math
 * sử dụng trong gatsby-node.js để tạo các trang SEO
 * hoặc trong các component để hiển thị SEO
 */
import parse from 'html-react-parser';
import fetch from 'node-fetch';

const WP_BASE_URL = process.env.REACT_APP_BASE_URL_SITE || 'https://agencysitestaging.mystagingwebsite.com'

export async function fetchSeoData({url}) {
    try {
        const response = await fetch(`${WP_BASE_URL}/wp-json/rankmath/v1/getHead?url=${encodeURIComponent(url)}`)
        const data = await response.json()

        if (data.success && data.head) {
            return parse(data.head);
        }
        return null
    } catch (error) {
        console.error('Error fetching SEO data:', error)
        return null
    }
}