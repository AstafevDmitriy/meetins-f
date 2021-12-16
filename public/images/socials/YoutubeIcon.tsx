export default function YoutubeIcon(props: any): JSX.Element {
	return (
		<svg
			{...props}
			width='32'
			height='32'
			viewBox='0 0 32 23'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M31.171 12.4612C31.1619 12.1814 31.1533 11.9012 31.1467 11.6214C31.1031 9.99884 31.0831 8.37429 30.9941 6.75174C30.9074 5.16785 30.3996 3.70353 29.7878 2.25674C29.578 1.75973 29.0587 1.354 28.5912 1.05069C27.8124 0.545311 26.7684 0.434111 25.8735 0.367153C24.6762 0.277077 23.4753 0.279469 22.2757 0.248381C20.8203 0.210916 19.3634 0.353203 17.9127 0.261534C16.4636 0.169466 14.9914 0.16269 13.5392 0.157907C11.8685 0.152726 10.1994 0.202546 8.52995 0.223271C7.70716 0.232837 6.8832 0.236025 6.05964 0.221677C5.36863 0.208923 4.16622 0.283454 3.52109 0.552485C2.23201 1.08935 1.88102 1.68241 1.18726 2.94626C0.830381 3.59591 0.691551 4.31731 0.645667 5.06582C0.600567 5.81233 0.268787 6.51499 0.288787 7.25632C0.319377 8.40657 0.182508 9.54846 0.184469 10.6967C0.190744 13.7872 0.163684 16.9031 1.47041 19.7325L1.77278 20.271C1.98259 20.5572 2.06142 20.9398 2.30496 21.1857C2.80341 21.6919 3.79993 21.7899 4.45878 21.872C5.28078 21.9745 6.11101 21.9765 6.93575 22.0446C8.29464 22.1566 9.71706 22.0087 11.0775 22.0781C12.4438 22.1474 13.7953 22.1785 15.1648 22.1423C18.4982 22.053 21.8219 22.283 25.1523 22.0374C26.5217 21.9366 28.2367 22.2431 29.2325 21.0793C30.1509 20.0048 30.5094 18.5823 30.7929 17.2224C31.1176 15.6644 31.2255 14.0526 31.171 12.4612ZM19.1838 12.8406C18.7151 13.163 18.2065 13.4149 17.7162 13.6991C16.7189 14.2778 15.7609 14.9546 14.7871 15.5775C14.5337 15.7393 12.6293 16.6768 12.6293 16.6768C12.6552 15.8697 12.6372 15.1323 12.6093 14.3603C12.5803 13.5504 12.6156 12.7409 12.6031 11.9307C12.5952 11.4468 12.5991 7.58673 12.5976 6.83623C12.5968 6.7067 12.5976 5.76928 12.5976 5.53532C12.8411 5.69355 13.1768 5.85617 13.4149 6.02157C13.8631 6.33125 14.3035 6.6501 14.7483 6.96776C15.2142 7.29976 15.7126 7.5668 16.2044 7.85456C17.1931 8.43248 18.0068 9.25232 19.0226 9.78799C19.8167 10.2069 20.5544 10.7015 21.316 11.1742C21.2595 11.1379 19.6089 12.5468 19.1838 12.8406Z'
				fill={props.color}
			/>
		</svg>
	)
}