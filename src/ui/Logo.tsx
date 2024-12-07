export default function Logo({ withText = true }: { withText?: boolean }) {
  console.log(withText ? "" : "");
  return (
    <svg
      viewBox="-1.722 -1.033 216.931 28.386"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-auto"
    >
      <path
        d="M 52.651 22.264 L 52.651 4.384 L 58.483 4.384 C 60.371 4.384 62.011 4.768 63.403 5.536 C 64.811 6.288 65.899 7.336 66.667 8.68 C 67.435 10.008 67.819 11.552 67.819 13.312 C 67.819 15.056 67.435 16.608 66.667 17.968 C 65.899 19.312 64.811 20.368 63.403 21.136 C 62.011 21.888 60.371 22.264 58.483 22.264 L 52.651 22.264 Z M 55.915 19.384 L 58.555 19.384 C 59.771 19.384 60.819 19.136 61.699 18.64 C 62.595 18.128 63.291 17.424 63.787 16.528 C 64.283 15.616 64.531 14.544 64.531 13.312 C 64.531 12.064 64.283 10.992 63.787 10.096 C 63.291 9.2 62.595 8.504 61.699 8.008 C 60.819 7.512 59.771 7.264 58.555 7.264 L 55.915 7.264 L 55.915 19.384 Z M 76.536 22.552 C 75.256 22.552 74.088 22.256 73.032 21.664 C 71.992 21.072 71.16 20.264 70.536 19.24 C 69.928 18.216 69.624 17.048 69.624 15.736 C 69.624 14.424 69.928 13.256 70.536 12.232 C 71.16 11.208 71.992 10.4 73.032 9.808 C 74.072 9.216 75.24 8.92 76.536 8.92 C 77.816 8.92 78.976 9.216 80.016 9.808 C 81.056 10.4 81.88 11.208 82.488 12.232 C 83.112 13.24 83.424 14.408 83.424 15.736 C 83.424 17.048 83.112 18.216 82.488 19.24 C 81.864 20.264 81.032 21.072 79.992 21.664 C 78.952 22.256 77.8 22.552 76.536 22.552 Z M 76.536 19.672 C 77.24 19.672 77.856 19.504 78.384 19.168 C 78.928 18.832 79.352 18.368 79.656 17.776 C 79.976 17.168 80.136 16.488 80.136 15.736 C 80.136 14.968 79.976 14.296 79.656 13.72 C 79.352 13.128 78.928 12.664 78.384 12.328 C 77.856 11.976 77.24 11.8 76.536 11.8 C 75.816 11.8 75.184 11.976 74.64 12.328 C 74.096 12.664 73.664 13.128 73.344 13.72 C 73.04 14.296 72.888 14.968 72.888 15.736 C 72.888 16.488 73.04 17.168 73.344 17.776 C 73.664 18.368 74.096 18.832 74.64 19.168 C 75.184 19.504 75.816 19.672 76.536 19.672 Z M 85.809 22.264 L 85.809 9.208 L 88.761 9.208 L 88.761 11.776 L 88.521 11.32 C 88.825 10.536 89.321 9.944 90.009 9.544 C 90.713 9.128 91.529 8.92 92.457 8.92 C 93.417 8.92 94.265 9.128 95.001 9.544 C 95.753 9.96 96.337 10.544 96.753 11.296 C 97.169 12.032 97.377 12.888 97.377 13.864 L 97.377 22.264 L 94.233 22.264 L 94.233 14.608 C 94.233 14.032 94.121 13.536 93.897 13.12 C 93.673 12.704 93.361 12.384 92.961 12.16 C 92.577 11.92 92.121 11.8 91.593 11.8 C 91.081 11.8 90.625 11.92 90.225 12.16 C 89.825 12.384 89.513 12.704 89.289 13.12 C 89.065 13.536 88.953 14.032 88.953 14.608 L 88.953 22.264 L 85.809 22.264 Z M 103.995 22.552 C 103.083 22.552 102.291 22.4 101.619 22.096 C 100.947 21.792 100.427 21.36 100.059 20.8 C 99.691 20.224 99.507 19.56 99.507 18.808 C 99.507 18.088 99.667 17.448 99.987 16.888 C 100.307 16.312 100.803 15.832 101.475 15.448 C 102.147 15.064 102.995 14.792 104.019 14.632 L 108.291 13.936 L 108.291 16.336 L 104.619 16.96 C 103.995 17.072 103.531 17.272 103.227 17.56 C 102.923 17.848 102.771 18.224 102.771 18.688 C 102.771 19.136 102.939 19.496 103.275 19.768 C 103.627 20.024 104.059 20.152 104.571 20.152 C 105.227 20.152 105.803 20.016 106.299 19.744 C 106.811 19.456 107.203 19.064 107.475 18.568 C 107.763 18.072 107.907 17.528 107.907 16.936 L 107.907 13.576 C 107.907 13.016 107.683 12.552 107.235 12.184 C 106.803 11.8 106.227 11.608 105.507 11.608 C 104.835 11.608 104.235 11.792 103.707 12.16 C 103.195 12.512 102.819 12.984 102.579 13.576 L 100.011 12.328 C 100.267 11.64 100.667 11.048 101.211 10.552 C 101.771 10.04 102.427 9.64 103.179 9.352 C 103.931 9.064 104.747 8.92 105.627 8.92 C 106.699 8.92 107.643 9.12 108.459 9.52 C 109.275 9.904 109.907 10.448 110.355 11.152 C 110.819 11.84 111.051 12.648 111.051 13.576 L 111.051 22.264 L 108.075 22.264 L 108.075 20.032 L 108.747 19.984 C 108.411 20.544 108.011 21.016 107.547 21.4 C 107.083 21.768 106.555 22.056 105.963 22.264 C 105.371 22.456 104.715 22.552 103.995 22.552 Z M 119.675 22.408 C 118.203 22.408 117.059 22.008 116.243 21.208 C 115.443 20.392 115.043 19.248 115.043 17.776 L 115.043 12.016 L 112.787 12.016 L 112.787 9.208 L 113.027 9.208 C 113.667 9.208 114.163 9.04 114.515 8.704 C 114.867 8.368 115.043 7.88 115.043 7.24 L 115.043 6.232 L 118.187 6.232 L 118.187 9.208 L 121.187 9.208 L 121.187 12.016 L 118.187 12.016 L 118.187 17.608 C 118.187 18.04 118.259 18.408 118.403 18.712 C 118.563 19.016 118.803 19.248 119.123 19.408 C 119.459 19.568 119.883 19.648 120.395 19.648 C 120.507 19.648 120.635 19.64 120.779 19.624 C 120.939 19.608 121.091 19.592 121.235 19.576 L 121.235 22.264 C 121.011 22.296 120.755 22.328 120.467 22.36 C 120.179 22.392 119.915 22.408 119.675 22.408 Z M 123.637 22.264 L 123.637 9.208 L 126.781 9.208 L 126.781 22.264 L 123.637 22.264 Z M 123.637 7.744 L 123.637 4.384 L 126.781 4.384 L 126.781 7.744 L 123.637 7.744 Z M 136.068 22.552 C 134.788 22.552 133.62 22.256 132.564 21.664 C 131.524 21.072 130.692 20.264 130.068 19.24 C 129.46 18.216 129.156 17.048 129.156 15.736 C 129.156 14.424 129.46 13.256 130.068 12.232 C 130.692 11.208 131.524 10.4 132.564 9.808 C 133.604 9.216 134.772 8.92 136.068 8.92 C 137.348 8.92 138.508 9.216 139.548 9.808 C 140.588 10.4 141.412 11.208 142.02 12.232 C 142.644 13.24 142.956 14.408 142.956 15.736 C 142.956 17.048 142.644 18.216 142.02 19.24 C 141.396 20.264 140.564 21.072 139.524 21.664 C 138.484 22.256 137.332 22.552 136.068 22.552 Z M 136.068 19.672 C 136.772 19.672 137.388 19.504 137.916 19.168 C 138.46 18.832 138.884 18.368 139.188 17.776 C 139.508 17.168 139.668 16.488 139.668 15.736 C 139.668 14.968 139.508 14.296 139.188 13.72 C 138.884 13.128 138.46 12.664 137.916 12.328 C 137.388 11.976 136.772 11.8 136.068 11.8 C 135.348 11.8 134.716 11.976 134.172 12.328 C 133.628 12.664 133.196 13.128 132.876 13.72 C 132.572 14.296 132.42 14.968 132.42 15.736 C 132.42 16.488 132.572 17.168 132.876 17.776 C 133.196 18.368 133.628 18.832 134.172 19.168 C 134.716 19.504 135.348 19.672 136.068 19.672 Z M 145.34 22.264 L 145.34 9.208 L 148.292 9.208 L 148.292 11.776 L 148.052 11.32 C 148.356 10.536 148.852 9.944 149.54 9.544 C 150.244 9.128 151.06 8.92 151.988 8.92 C 152.948 8.92 153.796 9.128 154.532 9.544 C 155.284 9.96 155.868 10.544 156.284 11.296 C 156.7 12.032 156.908 12.888 156.908 13.864 L 156.908 22.264 L 153.764 22.264 L 153.764 14.608 C 153.764 14.032 153.652 13.536 153.428 13.12 C 153.204 12.704 152.892 12.384 152.492 12.16 C 152.108 11.92 151.652 11.8 151.124 11.8 C 150.612 11.8 150.156 11.92 149.756 12.16 C 149.356 12.384 149.044 12.704 148.82 13.12 C 148.596 13.536 148.484 14.032 148.484 14.608 L 148.484 22.264 L 145.34 22.264 Z M 164.096 22.264 L 164.096 4.384 L 167.36 4.384 L 167.36 12.184 L 174.968 12.184 L 174.968 4.384 L 178.256 4.384 L 178.256 22.264 L 174.968 22.264 L 174.968 15.064 L 167.36 15.064 L 167.36 22.264 L 164.096 22.264 Z M 186.09 22.552 C 185.082 22.552 184.202 22.328 183.45 21.88 C 182.714 21.432 182.146 20.808 181.746 20.008 C 181.362 19.208 181.17 18.272 181.17 17.2 L 181.17 9.208 L 184.314 9.208 L 184.314 16.936 C 184.314 17.48 184.418 17.96 184.626 18.376 C 184.85 18.776 185.162 19.096 185.562 19.336 C 185.978 19.56 186.442 19.672 186.954 19.672 C 187.466 19.672 187.922 19.56 188.322 19.336 C 188.722 19.096 189.034 18.768 189.258 18.352 C 189.482 17.936 189.594 17.44 189.594 16.864 L 189.594 9.208 L 192.738 9.208 L 192.738 22.264 L 189.762 22.264 L 189.762 19.696 L 190.026 20.152 C 189.722 20.952 189.218 21.552 188.514 21.952 C 187.826 22.352 187.018 22.552 186.09 22.552 Z M 202.789 22.552 C 201.845 22.552 200.973 22.368 200.173 22 C 199.389 21.616 198.765 21.072 198.301 20.368 L 198.613 19.744 L 198.613 22.264 L 195.661 22.264 L 195.661 4.096 L 198.805 4.096 L 198.805 11.8 L 198.325 11.152 C 198.773 10.448 199.381 9.904 200.149 9.52 C 200.917 9.12 201.805 8.92 202.813 8.92 C 204.045 8.92 205.157 9.224 206.149 9.832 C 207.141 10.44 207.925 11.256 208.501 12.28 C 209.093 13.304 209.389 14.456 209.389 15.736 C 209.389 17 209.101 18.152 208.525 19.192 C 207.949 20.232 207.165 21.056 206.173 21.664 C 205.181 22.256 204.053 22.552 202.789 22.552 Z M 202.429 19.672 C 203.149 19.672 203.789 19.504 204.349 19.168 C 204.909 18.832 205.341 18.368 205.645 17.776 C 205.965 17.184 206.125 16.504 206.125 15.736 C 206.125 14.968 205.965 14.296 205.645 13.72 C 205.341 13.128 204.909 12.664 204.349 12.328 C 203.789 11.976 203.149 11.8 202.429 11.8 C 201.741 11.8 201.117 11.968 200.557 12.304 C 200.013 12.64 199.581 13.112 199.261 13.72 C 198.957 14.312 198.805 14.984 198.805 15.736 C 198.805 16.504 198.957 17.184 199.261 17.776 C 199.581 18.368 200.013 18.832 200.557 19.168 C 201.117 19.504 201.741 19.672 202.429 19.672 Z"
        fill="#ddd"
        className="dark:fill-white"
      />
      <path
        d="M20.8382 26C23.5996 26 25.8855 23.7425 25.3745 21.0288C25.0541 19.3274 24.5692 17.6594 23.9248 16.0502C22.6615 12.8958 20.81 10.0295 18.4758 7.61522C16.1416 5.2009 13.3705 3.28575 10.3208 1.97913C8.81513 1.33406 7.25611 0.843538 5.66618 0.512196C2.96284 -0.0511822 0.701294 2.23858 0.701294 5V21C0.701294 23.7614 2.93987 26 5.70129 26H20.8382Z"
        fill="#5D87FF"
      />
      <path
        d="M20.8382 26C23.5996 26 25.8855 23.7425 25.3745 21.0288C25.0541 19.3274 24.5692 17.6594 23.9248 16.0502C22.6615 12.8958 20.81 10.0295 18.4758 7.61522C16.1416 5.2009 13.3705 3.28575 10.3208 1.97913C8.81513 1.33406 7.25611 0.843538 5.66618 0.512196C2.96284 -0.0511822 0.701294 2.23858 0.701294 5V21C0.701294 23.7614 2.93987 26 5.70129 26H20.8382Z"
        fill="#5D87FF"
      />
      <g>
        <path
          d="M14.4025 26C11.6411 26 9.35518 23.7425 9.86626 21.0288C10.1867 19.3274 10.6715 17.6594 11.3159 16.0502C12.5792 12.8958 14.4308 10.0295 16.7649 7.61522C19.0991 5.2009 21.8702 3.28575 24.9199 1.97913C26.4256 1.33406 27.9846 0.843538 29.5745 0.512196C32.2779 -0.0511822 34.5394 2.23858 34.5394 5V21C34.5394 23.7614 32.3009 26 29.5394 26H14.4025Z"
          fill="#49BEFF"
        />
      </g>
    </svg>
  );
}
