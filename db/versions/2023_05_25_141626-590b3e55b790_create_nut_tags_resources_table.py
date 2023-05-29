"""create nut.tags-resources table

Revision ID: 590b3e55b790
Revises: 38092fd28cda
Create Date: 2023-05-25 14:16:26.881508

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '590b3e55b790'
down_revision = '38092fd28cda'
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        'tags_resources',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('tag_id', sa.Integer, nullable=False),
        sa.Column('resource_type', sa.String(length=255), nullable=False),
        sa.Column('resource_id', sa.Integer, nullable=False),
        sa.Column('sort_order', sa.Integer,
                  nullable=False, server_default='100'),
        sa.Column('created_at', sa.DateTime,
                  nullable=False, server_default=sa.func.current_timestamp())
    )
    op.create_index('idx_tags_resources_tag_resource',
                    'tags_resources', ['tag_id', 'resource_type', 'resource_id'], unique=True)
    op.create_index('idx_tags_resources_resource_type',
                    'tags_resources', ['resource_type'])


def downgrade() -> None:
    op.drop_table('tags_resources')
