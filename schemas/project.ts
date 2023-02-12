export default {
    name: "project",
    type: "document",
    title: "Project",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title"
        },
        {
            name: "images",
            title: "Images",
            type: "array",
            of: [{ type: "image" }]

        }
    ]
}