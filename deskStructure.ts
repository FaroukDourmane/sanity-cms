export const myStructure = (S: any) => {
    S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Site Settings')
        .child(
          S.document()
            .schemaType('informations')
            .documentId('informations')),
      ...S.documentTypeListItems(),
    ])
}