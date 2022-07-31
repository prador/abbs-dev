import React from 'react';

export const RegisterFile = {

  // Internal id of the component
  id: 'file',

  // Visible label
  label: 'File',

  // Fields the user need to fill out when adding an instance of the component
  fields: [
    {
      name: 'src',
      label: 'File',
      widget: 'file',
      media_library: {
        config: {
          multiple: true,
        },
      },
    },
    {
      name: 'title',
      label: 'Link text',
      default: 'Click here to view file',
      widget: 'string',
    },
  ],

  // Pattern to identify a block as being an instance of this component
  pattern: /\[(.*)\]\(undefined\ "File"\)/,

  // Function to extract data elements from the regexp match
  fromBlock(match) {
    return {
      title: match[1],
      src: match[2],
    };
  },

  // Function to create a text block from an instance of this component
  toBlock(fileObj) {
    return `[${fileObj.title}]("/"+${fileObj.src} "File")`;
  },

  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview(fileObj) {
    return (
      <File src={"/"+fileObj.src}>{fileObj.title}</File>
    );
  },

};

export const File = ({ src, children: title }) => <a href={src}>{(title.length > 0 && title !== 'undefined') ? title : 'View file'}</a>;