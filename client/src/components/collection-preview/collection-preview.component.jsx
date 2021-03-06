import React from "react";
import { withRouter } from "react-router-dom";

import CollectionItem from "../collection-item/collection-item.component";
import { CollectionPreviewCont, TitleCont, PreviewCont } from "./collection-preview.styles";

const CollectionPreview = ({title, items, history, match, routeName}) => (
    <CollectionPreviewCont>
        <TitleCont onClick={() => history.push(`${match.path}/${routeName}`)}>
            {title.toUpperCase()}
        </TitleCont>
        <PreviewCont>
            {
                items
                .filter((item, idx) => idx < 4)
                .map((item) => (
                    <CollectionItem key={item.id} item={item}/>
                ))
            }
        </PreviewCont>
    </CollectionPreviewCont>
);

export default withRouter(CollectionPreview);