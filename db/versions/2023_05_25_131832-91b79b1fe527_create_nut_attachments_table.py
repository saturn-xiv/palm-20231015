"""create nut.attachments table

Revision ID: 91b79b1fe527
Revises: 5dc954be8192
Create Date: 2023-05-25 13:18:32.282639

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '91b79b1fe527'
down_revision = '5dc954be8192'
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        'attachments',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('user_id', sa.Integer, nullable=False),
        sa.Column('bucket', sa.String(length=255), nullable=False),
        sa.Column('name', sa.String(length=63), nullable=False),
        sa.Column('title', sa.String(length=255), nullable=False),
        sa.Column('size', sa.BigInteger, nullable=False),
        sa.Column('content_type', sa.String(length=63), nullable=False),
        sa.Column('status', sa.String(length=16), nullable=False),
        sa.Column('deleted_at', sa.DateTime),
        sa.Column('version', sa.Integer, nullable=False, server_default='0'),
        sa.Column('updated_at', sa.DateTime, nullable=False),
        sa.Column('created_at', sa.DateTime,
                  nullable=False, server_default=sa.func.current_timestamp())
    )
    op.create_index('idx_attachments_bucket_name', 'attachments',
                    ['bucket', 'name'], unique=True)
    op.create_index('idx_attachments_bucket', 'attachments', ['bucket'])
    op.create_index('idx_attachments_name', 'attachments', ['name'])
    op.create_index('idx_attachments_title', 'attachments', ['title'])
    op.create_index('idx_attachments_content_type',
                    'attachments', ['content_type'])
    op.create_index('idx_attachments_status', 'attachments', ['status'])


def downgrade() -> None:
    op.drop_table('attachments')
