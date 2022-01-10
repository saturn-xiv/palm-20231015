pub mod schema;

pub enum WYSIWYGEditor {
    Markdown,
    Quill,
    Draft,
    Textarea,
}

pub struct Page {
    pub body: String,
    pub editor: WYSIWYGEditor,
}
