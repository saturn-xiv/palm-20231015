// @generated automatically by Diesel CLI.

diesel::table! {
    flashcard_books (id) {
        id -> Int4,
        lang -> Varchar,
        title -> Varchar,
        editor -> Int4,
        detail -> Text,
        cover -> Varchar,
        user_id -> Int4,
        status -> Int4,
        deleted_at -> Nullable<Timestamp>,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    flashcard_quizzes (id) {
        id -> Int4,
        book_id -> Int4,
        title -> Varchar,
        content -> Text,
        editor -> Int4,
        status -> Int4,
        deleted_at -> Nullable<Timestamp>,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    flashcard_scores (id) {
        id -> Int4,
        round -> Varchar,
        quiz_id -> Int4,
        user_id -> Int4,
        retry_times -> Int4,
        created_at -> Timestamp,
    }
}

diesel::allow_tables_to_appear_in_same_query!(flashcard_books, flashcard_quizzes, flashcard_scores,);
