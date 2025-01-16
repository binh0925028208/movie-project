import React, { createContext, useState, useEffect } from "react";
import { fetchDocumentsRealtime } from "../services/firebaseService";

export const ContextComments = createContext();

export const CommentsProvider = ({ children }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Sử dụng fetchDocumentsRealtime để lắng nghe dữ liệu realtime
    const unsubscribe = fetchDocumentsRealtime("Comments", (CommentsList) => {
      setComments(CommentsList);
    });

    // Hủy lắng nghe khi component bị unmount
    return () => unsubscribe();
  }, []);

  return (
    <ContextComments.Provider value={comments}>
      {children}
    </ContextComments.Provider>
  );
};
