import { useEffect} from 'react'

function useDocumentTitle(title) {
    useEffect(
      () => {
        document.title = title;
        // 页面销毁时title 重置为前端精读 return 为卸载时执行函数
        return () => (document.title = "前端精读");
      },
      [title]
    );
}

export default useDocumentTitle;